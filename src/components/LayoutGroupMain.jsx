import React from "react";
import styles from "./layoutGroupMain.module.css";

const GRID_AREAS = [
	'head',
	'body',
	'sidebar',
	'foot',
];

const LayoutGroupMain = (props) => (
	<div className={styles.gridTemplate}>
		{GRID_AREAS
			.map(areaName => (
				<div className={styles[`gridArea--${areaName}`]}>
					{props[areaName]}
				</div>
			))}
	</div>
);

export default LayoutGroupMain;
