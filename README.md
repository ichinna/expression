# expression
A library to interpret the SQL where clause into various serialized objects as per the need.

Gives different representation or serialized objects based on the where expression.


## Usecase
I have a where clause, I want to convert it to Hubspot filter as describe here https://developers.hubspot.com/docs/api/crm/search

>> Note that this library won't convert the where clause to hubspot filters.  But gives necessary tools to interpret where clause to whatever format a user want to transform or convert to.

## Deferent types of expression

1. Logical Expression 
    ```
    Ex: firstName = 'Chinna'
2. In Expression
    ```
    Ex: firstName in ('Chinna', 'Chello', 'Venkey')
3. Parenthesis Expression
    ```
    Ex: (firstName = 'Chinna' and lastName = 'Chello') or age > 25


## Operators
```
    AND("AND")
    OR("OR")
    EQUALS("=")
    NOTEQUALS("!=")
    LESSTHAN("<")
    GREATERTHAN(">")
    LESSTHANEQUALS("<=")
    GREATERTHANEQUALS(">=")
    LIKE("LIKE")
    ILIKE("ILIKE")
    NOT_LIKE("NOT LIKE")
    IN("IN")
    NOT_IN("NOT IN")
    ISNULL("IS NULL")
    ISNOTNULL("IS NOT NULL")
    SIMILARTO("SIMILAR TO")