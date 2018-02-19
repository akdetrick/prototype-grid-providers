import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function createGridProvider
 * Takes a CSS module and list of grid areas to create a layout helper component.
 *
 * Usage:
 * ```
 * import styles from 'styles/gridTemplates/someLayout.module.css';
 * const MyLayoutComponent = createGridProvider(styles, ['head', 'body', 'sidebar', 'foot']);
 *
 * const SomePage = () => (
 * 	<MyLayoutComponent
 * 		head={<SomeComponent />}
 * 		body={<SomeComponent />}
 * 		sidebar={<SomeComponent />}
 * 		foot={<SomeComponent />}
 * 	/>
 * );
 * ```
 *
 * @param {Object} cssModule - must follow grid provider conventions (link to docs TK)
 * @param {String} gridAreas
 * @returns {Function} stateless functional react component
 */
const createGridProvider = (cssModule, gridAreas) => {
	const Component = (props) => (
		<div className={cssModule.gridTemplate}>
			{gridAreas
				.map(areaName => (
					<div className={cssModule[`gridArea--${areaName}`]}>
						{props[areaName]}
					</div>
				))}
		</div>
	);

	Component.propTypes = {};
	gridAreas
		.forEach(areaName => {
			Component.propTypes[areaName] = PropTypes.element.isRequired;
		});

	return Component;
};

export default createGridProvider;
