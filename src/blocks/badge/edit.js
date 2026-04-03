import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';

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
	const { text, variant, pill } = attributes;

	const blockProps = useBlockProps( {
		className: `badge bg-${ variant }${ pill ? ' rounded-pill' : '' }`,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<SelectControl
						label={ __( 'Variant', 'bootstrap-theme' ) }
						value={ variant }
						options={ VARIANTS }
						onChange={ ( nextVariant ) => setAttributes( { variant: nextVariant } ) }
					/>
					<ToggleControl
						label={ __( 'Pill', 'bootstrap-theme' ) }
						help={ __( 'Use rounded pill shape.', 'bootstrap-theme' ) }
						checked={ pill }
						onChange={ ( nextPill ) => setAttributes( { pill: nextPill } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<RichText
				{ ...blockProps }
				tagName="span"
				value={ text }
				onChange={ ( nextText ) => setAttributes( { text: nextText } ) }
				placeholder={ __( 'Badge text...', 'bootstrap-theme' ) }
				allowedFormats={ [] }
			/>
		</>
	);
}
