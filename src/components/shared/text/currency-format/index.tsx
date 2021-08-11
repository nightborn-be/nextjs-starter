import { formatCurrency } from "../../../../utils/format";

/**
 * @description Returns the given child in a EUR format
 */
const CurrencyFormat = ({ children }: any) => {
	return <>{formatCurrency(children)}</>;
};

export default CurrencyFormat;
