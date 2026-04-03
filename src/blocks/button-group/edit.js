import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl } from '@wordpress/components';

const SIZE_OPTIONS = [
	{ label: __( 'Default', 'bootstrap-theme' ), value: '' },
	{ label: __( 'Large', 'bootstrap-theme' ), value: 'lg' },
	{ label: __( 'Small', 'bootstrap-theme' ), value: 'sm' },
];

export default function Edit( { attributes, setAttributes } ) {
	const { size, vertical, ariaLabel } = attributes;

	const groupClassName = [
		vertical ? 'btn-group-vertical' : 'btn-group',
		size ? `btn-group-${ size }` : '',
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( {
		className: groupClassName,
		role: 'group',
		'aria-label': ariaLabel,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<SelectControl
						label={ __( 'Size', 'bootstrap-theme' ) }
						value={ size }
						options={ SIZE_OPTIONS }
						onChange={ ( nextSize ) => setAttributes( { size: nextSize } ) }
					/>
					<ToggleControl
						label={ __( 'Vertical', 'bootstrap-theme' ) }
						checked={ vertical }
						onChange={ ( nextVertical ) => setAttributes( { vertical: nextVertical } ) }
					/>
					<TextControl
						label={ __( 'Aria Label', 'bootstrap-theme' ) }
						value={ ariaLabel }
						onChange={ ( nextLabel ) => setAttributes( { ariaLabel: nextLabel } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ [ 'core/button' ] }
					template={ [
						[ 'core/button', { text: __( 'Button', 'bootstrap-theme' ) } ],
						[ 'core/button', { text: __( 'Button', 'bootstrap-theme' ) } ],
					] }
				/>
			</div>
		</>
	);
}
