import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl } from '@wordpress/components';

const VARIANT_OPTIONS = [
	{ label: __( 'None', 'bootstrap-theme' ), value: '' },
	{ label: __( 'Primary', 'bootstrap-theme' ), value: 'primary' },
	{ label: __( 'Secondary', 'bootstrap-theme' ), value: 'secondary' },
	{ label: __( 'Success', 'bootstrap-theme' ), value: 'success' },
	{ label: __( 'Danger', 'bootstrap-theme' ), value: 'danger' },
	{ label: __( 'Warning', 'bootstrap-theme' ), value: 'warning' },
	{ label: __( 'Info', 'bootstrap-theme' ), value: 'info' },
	{ label: __( 'Light', 'bootstrap-theme' ), value: 'light' },
	{ label: __( 'Dark', 'bootstrap-theme' ), value: 'dark' },
];

export default function Edit( { attributes, setAttributes } ) {
	const { active, disabled, variant } = attributes;

	const itemClassName = [
		'list-group-item',
		active ? 'active' : '',
		disabled ? 'disabled' : '',
		variant ? `list-group-item-${ variant }` : '',
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: itemClassName } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<SelectControl
						label={ __( 'Variant', 'bootstrap-theme' ) }
						value={ variant }
						options={ VARIANT_OPTIONS }
						onChange={ ( nextVariant ) => setAttributes( { variant: nextVariant } ) }
					/>
					<ToggleControl
						label={ __( 'Active', 'bootstrap-theme' ) }
						checked={ active }
						onChange={ ( nextActive ) => setAttributes( { active: nextActive } ) }
					/>
					<ToggleControl
						label={ __( 'Disabled', 'bootstrap-theme' ) }
						checked={ disabled }
						onChange={ ( nextDisabled ) => setAttributes( { disabled: nextDisabled } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<li { ...blockProps }>
				<InnerBlocks
					template={ [ [ 'core/paragraph', { placeholder: __( 'List item content...', 'bootstrap-theme' ) } ] ] }
				/>
			</li>
		</>
	);
}
