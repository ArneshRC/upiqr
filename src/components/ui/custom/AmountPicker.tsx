import { useConfig } from "@contexts/ConfigContext";
import NumberPicker from "./NumberPicker";

const AmountPicker = () => {
  const config = useConfig()!;
  const [amount, setAmount] = config.amount;
  return (
    <NumberPicker
      onChange={setAmount}
      step={0.01}
      value={amount}
      label="Amount (₹)"
      name="amount"
    />
  );
};

export default AmountPicker;

