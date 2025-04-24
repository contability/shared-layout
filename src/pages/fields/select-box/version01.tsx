import { useForm } from "react-hook-form";
import DefaultSelectBox from "../../../components/shared/fields/select-box/version01";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SelectBoxVersion01Schema = z.object({
  testField: z.string(),
});

type SelectBoxVersion01SchemaType = z.infer<typeof SelectBoxVersion01Schema>;

const SelectBoxVersion01 = () => {
  const { register, watch } = useForm<SelectBoxVersion01SchemaType>({
    resolver: zodResolver(SelectBoxVersion01Schema),
    mode: "onChange",
    defaultValues: {
      testField: "",
    },
  });
  return (
    <div>
      <DefaultSelectBox
        optionList={[
          { id: "1", name: "value01" },
          { id: "2", name: "value02" },
          { id: "3", name: "value03" },
        ]}
        value={watch("testField")}
        label={"label"}
        register={register("testField")}
      />
    </div>
  );
};

export default SelectBoxVersion01;
