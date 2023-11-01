type CheckboxProps = {
  id: string;
  onCheck: (isChecked: boolean) => void;
};
function Checkbox({ id, onCheck }: CheckboxProps) {
  return (
    <input
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      type="checkbox"
      id={id}
      onChange={(e) => onCheck(e.target.checked)}
    />
  );
}
export default Checkbox;
