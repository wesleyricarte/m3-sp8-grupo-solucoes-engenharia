import { UseFormRegister } from "react-hook-form";
import { DivInput, InputCamp, Label } from "./style";

interface iCampInput {
  name: string;
  id: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<any>;
}

const Input = ({ name, id, placeholder, type, register }: iCampInput) => {
  return (
    <DivInput>
      <Label htmlFor={id}>{name}</Label>
      <InputCamp
        placeholder={placeholder}
        id={id}
        type={type}
        {...register(id)}
      />
    </DivInput>
  );
};

export default Input;
