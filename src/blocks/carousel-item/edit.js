import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { active, caption, captionLead } = attributes;

	const itemClassName = `carousel-item${ active ? ' active' : '' }`;
	const blockProps = useBlockProps( { className: itemClassName } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<ToggleControl
						label={ __( 'Active (first visible slide)', 'bootstrap-theme' ) }
						checked={ active }
						onChange={ ( nextActive ) => setAttributes( { active: nextActive } ) }
					/>
					<TextControl
						label={ __( 'Caption Heading', 'bootstrap-theme' ) }
						value={ caption }
						onChange={ ( nextCaption ) => setAttributes( { caption: nextCaption } ) }
					/>
					<TextControl
						label={ __( 'Caption Text', 'bootstrap-theme' ) }
						value={ captionLead }
						onChange={ ( nextLead ) => setAttributes( { captionLead: nextLead } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<InnerBlocks
					template={ [ [ 'core/image', {} ] ] }
				/>
				{ caption && (
					<div className="carousel-caption d-none d-md-block">
						<h5>{ caption }</h5>
						{ captionLead && <p>{ captionLead }</p> }
					</div>
				) }
			</div>
		</>
	);
}
