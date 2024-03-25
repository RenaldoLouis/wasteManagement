import { Children, memo } from "react";

export const Each = memo(({ render, of }) => Children.toArray(of.map((item, index) => render(item, index))));