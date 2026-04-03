import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

const TEXT_ALIGN_OPTIONS = [
	{ label: __( 'None', 'bootstrap-theme' ), value: '' },
	{ label: __( 'Start', 'bootstrap-theme' ), value: 'start' },
	{ label: __( 'Center', 'bootstrap-theme' ), value: 'center' },
	{ label: __( 'End', 'bootstrap-theme' ), value: 'end' },
];

export default function Edit( { attributes, setAttributes } ) {
	const { textAlign } = attributes;

	const cardClassName = `card${ textAlign ? ` text-${ textAlign }` : '' }`;
	const blockProps = useBlockProps( { className: cardClassName } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<SelectControl
						label={ __( 'Text Align', 'bootstrap-theme' ) }
						value={ textAlign }
						options={ TEXT_ALIGN_OPTIONS }
						onChange={ ( nextAlign ) => setAttributes( { textAlign: nextAlign } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<div className="card-body">
					<InnerBlocks
						template={ [
							[ 'core/heading', { level: 5, placeholder: __( 'Card title', 'bootstrap-theme' ), className: 'card-title' } ],
							[ 'core/paragraph', { placeholder: __( 'Card content...', 'bootstrap-theme' ) } ],
						] }
					/>
				</div>
			</div>
		</>
	);
}
