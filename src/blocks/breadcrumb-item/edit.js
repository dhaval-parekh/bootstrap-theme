import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { label, href, active } = attributes;

	const itemClassName = `breadcrumb-item${ active ? ' active' : '' }`;
	const blockProps = useBlockProps( {
		className: itemClassName,
		...( active ? { 'aria-current': 'page' } : {} ),
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<TextControl
						label={ __( 'Label', 'bootstrap-theme' ) }
						value={ label }
						onChange={ ( nextLabel ) => setAttributes( { label: nextLabel } ) }
					/>
					<ToggleControl
						label={ __( 'Active (current page)', 'bootstrap-theme' ) }
						checked={ active }
						onChange={ ( nextActive ) => setAttributes( { active: nextActive } ) }
					/>
					{ ! active && (
						<TextControl
							label={ __( 'URL', 'bootstrap-theme' ) }
							value={ href }
							onChange={ ( nextHref ) => setAttributes( { href: nextHref } ) }
							type="url"
						/>
					) }
				</PanelBody>
			</InspectorControls>
			<li { ...blockProps }>
				{ active ? label : <a href={ href }>{ label }</a> }
			</li>
		</>
	);
}
