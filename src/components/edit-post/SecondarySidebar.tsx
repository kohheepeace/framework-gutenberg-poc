/**
 * https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-post/src/components/secondary-sidebar/inserter-sidebar.js
 */

/**
 * External dependencies
 */
import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';

/**
 * WordPress dependencies
 */
import { __experimentalLibrary as Library } from '@wordpress/block-editor';
import { __experimentalUseDialog as useDialog } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { isInserterOpenedAtom } from './atoms';
import './SecondarySidebar.scss';

export default function SecondarySidebar() {
  const showMostUsedBlocks = false;

  /**
   * Refs
   */
  const libraryRef = useRef<any | undefined>(); // Add type  }, []);
  useEffect(() => {
    if (libraryRef.current) {
      libraryRef.current.focusSearch();
    }
  }, []);

  /**
   * Atoms
   */
  const [isInserterOpened, setIsInserterOpened] = useAtom(isInserterOpenedAtom);

  // https://github.com/WordPress/gutenberg/pull/27643/files
  const [inserterDialogRef, inserterDialogProps] = useDialog({
    onClose: () => {
      setIsInserterOpened(false);
    },
    focusOnMount: null,
  });

  const EMPTY_INSERTION_POINT = {
    rootClientId: undefined,
    insertionIndex: undefined,
  };

  if (isInserterOpened) {
    return (
      <div
        ref={inserterDialogRef}
        {...inserterDialogProps}
        className="edit-post-editor__inserter-panel"
      >
        <div className="edit-post-editor__inserter-panel-content">
          <Library
            showMostUsedBlocks={showMostUsedBlocks}
            showInserterHelpPanel
            shouldFocusBlock={false}
            rootClientId={EMPTY_INSERTION_POINT.rootClientId}
            __experimentalInsertionIndex={EMPTY_INSERTION_POINT.insertionIndex}
            ref={libraryRef}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
