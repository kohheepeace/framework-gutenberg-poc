import { atom } from "jotai";

/**
 * Ui
 */
// export const isSecondarySidebarOpen = atom(false);
// isSecondarySidebarOpen.debugLabel = 'isSecondarySidebarOpen';

export const isInserterOpenedAtom = atom(false);
isInserterOpenedAtom.debugLabel = "isInserterOpenedAtom";

export const isInspectorOpenedAtom = atom(false);
isInspectorOpenedAtom.debugLabel = "isInspectorOpenedAtom";

export const editorModeAtom = atom("visual");
editorModeAtom.debugLabel = "editorModeAtom";

export const postAtom = atom(null);
postAtom.debugLabel = "postAtom";
