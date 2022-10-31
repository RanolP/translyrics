import { KanmalKanGroup } from '../lib/kanmal/kan-group.js';
import { Representation } from '../lib/kanmal/representation.js';
import { KanmalRowEditor } from './kanmal-row-editor.js';

export interface KanmalKanGroupEditorProps {
  kanGroup: KanmalKanGroup;
}

export function KanmalKanGroupEditor({
  kanGroup,
}: KanmalKanGroupEditorProps): JSX.Element {
  const rows = [
    Representation.English,
    Representation.JapaneseKana,
    Representation.Japanese,
    Representation.JapaneseHangul,
    Representation.Korean,
  ]
    .map((repr) => kanGroup[repr])
    .filter(Boolean)
    .map((row) => <KanmalRowEditor key={row!.id} row={row!} />);
  return <span>{rows}</span>;
}
