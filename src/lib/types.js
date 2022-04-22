/** JSDoc type definitions */

/**
 * @typedef {Object<string, JSON> | Array<JSON> | string | number | boolean | null} JSON
 */

/**
 * @typedef {{ json: JSON, text: undefined } | { json: undefined, text: string}} Content
 */

/**
 * @typedef {Array<string | number | Symbol>} Path
 */

/**
 * @typedef {'after' | 'key' | 'value' | 'append'} CaretType
 */

/**
 * @typedef {{
 *   start: number,
 *   end: number
 * }} VisibleSection
 */

/**
 * @typedef {{
 *   path: Path,
 *   type: CaretType
 * }} CaretPosition
 */

/**
 * @typedef {{
 *   op: 'add' | 'remove' | 'replace' | 'copy' | 'move' | 'test',
 *   path: string,
 *   from?: string,
 *   value?: *
 * }} JSONPatchOperation
 */

/**
 * @typedef {{
 *   op: 'add' | 'remove' | 'replace' | 'copy' | 'move' | 'test',
 *   path: Path,
 *   from?: Path,
 *   value?: *
 * }} PreprocessedJSONPatchOperation
 */

/**
 * @typedef {JSONPatchOperation[]} JSONPatchDocument
 */

/**
 * @typedef {{
 *   json: JSON,
 *   previousJson: JSON,
 *   undo: JSONPatchDocument,
 *   redo: JSONPatchDocument
 * }} JSONPatchResult
 */

/**
 * @typedef {{
 *   before?: function (json: JSON, operation: PreprocessedJSONPatchOperation) : { json?: JSON, operation?: PreprocessedJSONPatchOperation } | undefined,
 *   after?: function (json: JSON, operation: PreprocessedJSONPatchOperation, previousJson: JSON) : JSON
 * }} JSONPatchOptions
 */

/**
 * @typedef {{
 *   type: 'multi',
 *   paths: Path[],
 *   anchorPath: Path,
 *   focusPath: Path,
 *   pathsMap: Object<string, boolean>
 * }} MultiSelection
 */

/**
 * @typedef {{type: 'after', anchorPath: Path, focusPath: Path}} AfterSelection
 */

/**
 * @typedef {{type: 'inside', anchorPath: Path, focusPath: Path}} InsideSelection
 */

/**
 * @typedef {{type: 'key', anchorPath: Path, focusPath: Path, edit?: boolean}} KeySelection
 */

/**
 * @typedef {{type: 'value', anchorPath: Path, focusPath: Path, edit?: boolean}} ValueSelection
 */

/**
 * @typedef {MultiSelection | AfterSelection | InsideSelection | KeySelection | ValueSelection} Selection
 */

/**
 * @typedef {Object<string, RecursiveSelection> || Array<RecursiveSelection>} RecursiveSelection
 */

/**
 * @typedef {{type: 'after', path: Path}} AfterSelectionSchema
 */

/**
 * @typedef {{type: 'inside', path: Path}} InsideSelectionSchema
 */

/**
 * @typedef {{type: 'key', path: Path, edit?: boolean, next?: boolean}} KeySelectionSchema
 */

/**
 * @typedef {{type: 'value', path: Path, edit?: boolean, next?: boolean, nextInside?: boolean}} ValueSelectionSchema
 */

/**
 * @typedef {{type: 'multi', anchorPath: Path, focusPath: Path}} MultiSelectionSchema
 */

/**
 * @typedef {MultiSelectionSchema  | AfterSelectionSchema | InsideSelectionSchema | KeySelectionSchema | ValueSelectionSchema} SelectionSchema
 */

/**
 * @typedef {Array.<{key: string, value: *}>} ClipboardValues
 */

/**
 * @typedef {{
 *   prefix: string,
 *   iconName: string,
 *   icon: Array
 * }} FontAwesomeIcon
 */

/**
 * @typedef {Object} DropdownButtonItem
 * @property {string} text
 * @property {function} onClick
 * @property {FontAwesomeIcon} [icon]
 * @property {string} [title=undefined]
 */

/**
 * @typedef {Object} MenuButtonItem
 * @property {function} onClick
 * @property {FontAwesomeIcon} [icon]
 * @property {string} [text=undefined]
 * @property {string} [title=undefined]
 * @property {string} [className=undefined]
 * @property {boolean} [disabled=false]
 */

/**
 * @typedef {Object} MenuSeparatorItem
 * @property {true} separator
 */

/**
 * @typedef {Object} MenuSpaceItem
 * @property {true} space
 */

/**
 * @typedef {MenuButtonItem | MenuSeparatorItem | MenuSpaceItem} MenuItem
 */

/**
 * @typedef {{path: Path, message: string, isChildError?: boolean}} ValidationError
 */

/**
 * @typedef {{
 *   position: number | null,
 *   row: number | null,
 *   column: number | null,
 *   message: string
 * }} ParseError
 */

/**
 * @typedef {Object} RichValidationError
 * @property {Path} [path]
 * @property {boolean} [isChildError]
 * @property {number} [line]
 * @property {number} [column]
 * @property {number} from
 * @property {number} to
 * @property {number} message
 * @property {'info' | 'warning' | 'error'} [severity]
 * @property {string[]} [actions]
 */

/**
 * @typedef {{start: number, end: number}} Section
 *  Start included, end excluded
 */

/**
 * @typedef {Object} QueryLanguage
 * @property {string} id     A unique identifier
 * @property {string} name   Short, human readable name
 * @property {string} description
 * @property {(json: JSON, queryOptions: QueryLanguageOptions) => string} createQuery
 * @property {(json: JSON, query: string) => JSON} executeQuery
 */

/**
 * @typedef {Object} QueryLanguageOptions
 * @property {{
 *   path?: string[],
 *   relation?: '==' | '!=' | '<' | '<=' | '>' | '>=',
 *   value?: string
 * }} [filter]
 * @property {{
 *   path?: string[],
 *   direction?: 'asc' | 'desc'
 * }} [sort]
 * @property {{
 *   paths?: string[][]
 * }} [projection]
 */

/**
 * @typedef {Object} RenderValueProps
 * @property {Path} path
 * @property {JSON} value
 * @property {boolean} readOnly
 * @property {boolean | undefined} enforceString
 * @property {Selection | undefined} selection
 * @property {SearchResultItem | undefined} searchResult
 * @property {boolean} isSelected
 * @property {boolean} isEditing
 * @property {ValueNormalization} normalization
 * @property {(patch: JSONPatchDocument, newSelection: Selection | null) => void} onPatch
 * @property {(pastedJson: { path: Path, contents: JSON }) => void} onPasteJson
 * @property {(selection: Selection) => void} onSelect
 */

/**
 * @typedef {Object} RenderValueConstructor
 * @property {SvelteComponentConstructor} component
 * @property {Object} props
 */

/**
 * @typedef {Object} ValueNormalization
 * @property {(any) => string} escapeValue
 * @property {(string) => string} unescapeValue
 */

/**
 * @typedef {(any) => string} EscapeValue
 */

/**
 * @typedef {(string) => string} UnescapeValue
 */

/**
 * @typedef {Object} DragInsideProps
 * @property {Selection} fullSelection
 * @property {number} deltaY
 * @property {Array.<{ path: Path, height: number}>} items
 */

/**
 * @typedef {{ beforePath: Path, indexOffset: number} | {append: true, indexOffset: number}} DragInsideAction
 */

/**
 * @typedef {{ path: Path, height: number }} RenderedItem
 */

/**
 * @typedef {'value' | 'object' | 'array' | 'structure'} InsertType
 */

/**
 * @typedef {Object} ContextMenuProps
 * @property {Element} anchor
 * @property {number} left
 * @property {number} top
 * @property {number} width
 * @property {number} height
 * @property {number} offsetTop
 * @property {number} offsetLeft
 * @property {boolean} showTip
 */

/**
 * @typedef {Object} TreeModeContext
 * @property {boolean} readOnly
 * @property {boolean} showTip
 * @property {ValueNormalization} normalization
 * @property {() => JSON} getFullJson
 * @property {() => JSON} getFullState
 * @property {() => Selection} getFullSelection
 * @property {(path: Path) => Element | null} findElement
 * @property {(operations: JSONPatchDocument, newSelection?: Selection) => void} onPatch
 * @property {(type: InsertType) => void} onInsert
 * @property {(path: Path, expanded: boolean, recursive?: boolean = false) => void} onExpand
 * @property {{selectionSchema: SelectionSchema, options?: { ensureFocus?: boolean }}} onSelect
 * @property {(findAndReplace: boolean) => void} onFind
 * @property {(path: Path, section: Section) => void} onExpandSection
 * @property {(props: RenderValueProps) => RenderValueConstructor[]} onRenderValue
 * @property {(contextMenuProps: ContextMenuProps) => void} onContextMenu
 * @property {function (path: Path, value: *) : string} onClassName
 * @property {(event: Event) => void} onDrag
 * @property {(event: Event) => void} onDragEnd
 */
