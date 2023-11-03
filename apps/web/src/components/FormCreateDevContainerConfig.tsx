import Checkbox from "../ui/Checkbox";
import { services } from "@inizio/cli/src/assets/list-services";
import { images } from "@inizio/cli/src/assets/list-images";
import SubTitle from "../ui/SubTitle";
import { CreateDevContainerConfigDto } from "@inizio/cli/src/types/devContainerConfig";

type FormCreateDevContainerConfigProps = {
  configDevContainer: CreateDevContainerConfigDto;
  setConfigDevContainer: (config: CreateDevContainerConfigDto) => void;
};

function FormCreateDevContainerConfig({
  configDevContainer,
  setConfigDevContainer,
}: FormCreateDevContainerConfigProps) {
  function onCheckDockerfileExist(isChecked: boolean) {
    setConfigDevContainer({
      ...configDevContainer,
      devContainerImage: isChecked ? undefined : images[0].name,
    });
  }

  function onCheckService(serviceName: string, isChecked: boolean) {
    setConfigDevContainer({
      ...configDevContainer,
      listServices: isChecked
        ? [...configDevContainer.listServices, serviceName]
        : configDevContainer.listServices.filter(
            (service) => service !== serviceName
          ),
    });
  }

  function onSelectDevContinerImage(imageName: string) {
    setConfigDevContainer({
      ...configDevContainer,
      devContainerImage: imageName,
    });
  }

  return (
    <div className="w-1/3 m-auto mt-5">
      <SubTitle>Devcontainer infos</SubTitle>
      <Checkbox id="dockerfileExist" onCheck={onCheckDockerfileExist} />
      <label className="ml-2 text-xl">
        Do you have a Dockerfile in your project
      </label>
      {configDevContainer.devContainerImage && (
        <div>
          <select
            className="text-xl border rounded"
            defaultValue={configDevContainer.devContainerImage}
            onChange={(e) => onSelectDevContinerImage(e.target.value)}
          >
            {images.map((image) => (
              <option key={image.name} value={image.name}>
                {image.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <SubTitle>Select one or multiple services</SubTitle>
      {services.map((service) => (
        <div key={service.name} className="flex items-center">
          <Checkbox
            id={service.name}
            onCheck={(isChecked) => onCheckService(service.name, isChecked)}
          />
          <img className="ml-2 w-7" src={service.icon} />
          <label className="ml-2 text-xl">{service.name}</label>
        </div>
      ))}
    </div>
  );
}

export default FormCreateDevContainerConfig;
