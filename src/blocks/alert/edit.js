import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { variant } = attributes;

	const blockProps = useBlockProps( {
		className: `alert alert-${ variant }`,
		role: 'alert',
	} );

	const variants = [
		{ label: __( 'Primary', 'bootstrap-theme' ), value: 'primary' },
		{ label: __( 'Secondary', 'bootstrap-theme' ), value: 'secondary' },
		{ label: __( 'Success', 'bootstrap-theme' ), value: 'success' },
		{ label: __( 'Danger', 'bootstrap-theme' ), value: 'danger' },
		{ label: __( 'Warning', 'bootstrap-theme' ), value: 'warning' },
		{ label: __( 'Info', 'bootstrap-theme' ), value: 'info' },
		{ label: __( 'Light', 'bootstrap-theme' ), value: 'light' },
		{ label: __( 'Dark', 'bootstrap-theme' ), value: 'dark' },
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<SelectControl
						label={ __( 'Variant', 'bootstrap-theme' ) }
						value={ variant }
						options={ variants }
						onChange={ ( nextVariant ) => setAttributes( { variant: nextVariant } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<InnerBlocks
					template={ [ [ 'core/paragraph', { placeholder: __( 'Alert content...', 'bootstrap-theme' ) } ] ] }
				/>
			</div>
		</>
	);
}
