import useClipboard from "react-use-clipboard";


const textCopy = 'Prem Biswas'
const CopyToClipBoard = () => {
    const [isCopied, setCopied] = useClipboard(textCopy, {
        successDuration: 1000,
    });

    return (
        <div>
            <button onClick={setCopied}>
                Was it copied? {isCopied ? "Yes" : "Nope"}
            </button>
        </div>
    )
}

export default CopyToClipBoard;
