import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';

const TYPES = [
	{ label: __( 'Border', 'bootstrap-theme' ), value: 'border' },
	{ label: __( 'Grow', 'bootstrap-theme' ), value: 'grow' },
];

const VARIANTS = [
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
	const { type, variant, small } = attributes;

	const spinnerClassName = `spinner-${ type } text-${ variant }${ small ? ` spinner-${ type }-sm` : '' }`;
	const blockProps = useBlockProps( { className: spinnerClassName, role: 'status' } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<SelectControl
						label={ __( 'Type', 'bootstrap-theme' ) }
						value={ type }
						options={ TYPES }
						onChange={ ( nextType ) => setAttributes( { type: nextType } ) }
					/>
					<SelectControl
						label={ __( 'Variant', 'bootstrap-theme' ) }
						value={ variant }
						options={ VARIANTS }
						onChange={ ( nextVariant ) => setAttributes( { variant: nextVariant } ) }
					/>
					<ToggleControl
						label={ __( 'Small', 'bootstrap-theme' ) }
						checked={ small }
						onChange={ ( nextSmall ) => setAttributes( { small: nextSmall } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<span className="visually-hidden">
					{ __( 'Loading...', 'bootstrap-theme' ) }
				</span>
			</div>
		</>
	);
}
