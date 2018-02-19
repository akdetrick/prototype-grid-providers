import React from "react";

import createGridProvider from "../util/createGridProvider";

import indexStyles from "../styles/index.module.css";
import gridStyles from "../styles/gridTemplates/groupMain.module.css";

const LayoutGroupHome = createGridProvider(
	gridStyles,
	['head', 'body', 'sidebar', 'foot']
);

const Wrapper = (props) => (
	<div className={indexStyles.wrapper}>
		<h2>Grid Provider Demo</h2>
		<LayoutGroupHome
			head={<div className={indexStyles.debug}>head el</div>}
			body={<div className={indexStyles.debug}>body</div>}
			sidebar={<div className={indexStyles.debug}>sidebar</div>}
			foot={<div className={indexStyles.debug}>foot</div>}
		/>
	</div>
);

export default Wrapper;
