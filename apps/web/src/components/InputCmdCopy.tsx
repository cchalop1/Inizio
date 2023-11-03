import { useState } from "react";
import { CreateDevContainerConfigDto } from "@inizio/types/devContainerConfig";

type InputCmdCopyProps = {
  configDevContainer: CreateDevContainerConfigDto;
};

function InputCmdCopy({ configDevContainer }: InputCmdCopyProps) {
  const [isCopied, setIsCopied] = useState(false);
  const copyIcon = isCopied ? "check.svg" : "copy-empty.svg";
  const text = configDevContainerToStringCmd(configDevContainer);

  function copyContent() {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  }

  function configDevContainerToStringCmd(
    configDevContainer: CreateDevContainerConfigDto
  ) {
    let cmd = `npx @cchalop1/inizio`;
    if (configDevContainer.devContainerImage) {
      cmd += ` --devContainerImage ${configDevContainer.devContainerImage}`;
    }
    for (const service of configDevContainer.listServices) {
      cmd += ` -s ${service}`;
    }
    return cmd;
  }

  return (
    <>
      <div
        onClick={copyContent}
        className="relative m-auto mt-10 mb-10 w-1/3 border-2 border-violet-600 rounded-lg p-2.5 flex justify-between cursor-text"
      >
        {isCopied && (
          <div className="absolute -translate-y-10 translate-x-1/2">
            Copied to clibboard
          </div>
        )}
        <div>{text}</div>
        <img src={copyIcon} className="w-5" alt="copy" />
      </div>
    </>
  );
}

export default InputCmdCopy;
