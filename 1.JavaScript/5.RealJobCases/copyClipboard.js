const CopyToClipBoard = (text) =>
    navigator.clipboard.writeText(text);

CopyToClipBoard("Hello World");