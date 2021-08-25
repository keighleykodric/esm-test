import * as React from "react";
import styles from "./Button.modules.css";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

export function Button({
  title = formatDistance(subDays(new Date(), 3), new Date(), {
    addSuffix: true,
  }),
}) {
  return <button className={styles.button}>{title}</button>;
}
