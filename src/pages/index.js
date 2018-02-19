import React from "react";

import LayoutGroupMain from "../components/LayoutGroupMain";

import styles from "./index.module.css";

const Wrapper = (props) => (
	<div className={styles.body}>
		<div>Hello world!</div>
		<LayoutGroupMain
			head={<h1 className={styles.debug}>head el</h1>}
			body={<p className={styles.debug}>body</p>}
			sidebar={<p className={styles.debug}>sidebar</p>}
			foot={<footer className={styles.debug}>foot</footer>}
		/>
	</div>
);

export default Wrapper;
