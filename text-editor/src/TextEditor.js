import React, { useRef } from 'react';
import './TextEditor.css';

const TextEditor = () => {
    const contentRef = useRef(null);

    const execCommand = (command, value = null) => {
        document.execCommand(command, false, value);
    };

    const handleColorChange = (event) => {
        execCommand('foreColor', event.target.value);
        event.target.value = '#000000'; // Reset the color picker
    };

    return (
        <div className="text-editor-container">
            <div className="toolbar">
                <button onClick={() => execCommand('bold')}><img src="Resources/bold.png" alt="Bold" height="25px" width="25px" /></button>
                <button onClick={() => execCommand('underline')}><img src="Resources/underline.png" alt="Underline" height="30px" width="40px" /></button>
                <button onClick={() => execCommand('italic')}><img src="Resources/italic.png" alt="Italic" height="25px" width="25px" /></button>
                <button onClick={() => document.getElementById('fontColorPicker').click()}><img src="Resources/color.png" alt="Color" height="28px" width="28px" /></button>
                <input type="color" id="fontColorPicker" onInput={handleColorChange} />
                <button onClick={() => execCommand('justifyLeft')}><img src="Resources/left.png" alt="Align Left" height="25px" width="25px" /></button>
                <button onClick={() => execCommand('justifyCenter')}><img src="Resources/center.png" alt="Align Center" height="25px" width="25px" /></button>
                <button onClick={() => execCommand('justifyRight')}><img src="Resources/right.png" alt="Align Right" height="25px" width="25px" /></button>
                <button onClick={() => execCommand('justifyFull')}><img src="Resources/justify.png" alt="Justify" height="25px" width="25px" /></button>
                <button onClick={() => execCommand('undo')}><img src="Resources/undo.png" alt="Undo" height="25px" width="25px" /></button>
                <button onClick={() => execCommand('redo')}><img src="Resources/redo.png" alt="Redo" height="25px" width="25px" /></button>
            </div>
            <div
                id="content"
                ref={contentRef}
                contentEditable
                spellCheck="false"
                className="content"
            ></div>
        </div>
    );
};

export default TextEditor;
