const Checkbox = ({ checked }: { checked: boolean }) => {
  return <span>{checked ? "[X]" : "[ ]"}</span>;
};

export default Checkbox;
