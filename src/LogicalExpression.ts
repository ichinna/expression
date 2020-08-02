import { ExpressionOperator } from "./ExpressionOperator";

interface LogicalExpression extends Expression {
    left: Expression;
    right: Expression;
    operator: ExpressionOperator;
    isNot: boolean;
}