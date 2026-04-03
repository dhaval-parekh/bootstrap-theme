import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

export default function Edit( { attributes, setAttributes, clientId, context } ) {
	const { title, blockId, expanded } = attributes;
	const alwaysOpen = context?.[ 'bootstrap/accordion/alwaysOpen' ];

	useEffect( () => {
		if ( ! blockId ) {
			setAttributes( { blockId: `bs-${ clientId.substring( 0, 8 ) }` } );
		}
	}, [ blockId, clientId, setAttributes ] );

	const blockProps = useBlockProps( { className: 'accordion-item' } );
	const buttonClassName = `accordion-button${ expanded ? '' : ' collapsed' }`;
	const collapseClassName = `accordion-collapse collapse${ expanded ? ' show' : '' }`;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<TextControl
						label={ __( 'Title', 'bootstrap-theme' ) }
						value={ title }
						onChange={ ( nextTitle ) => setAttributes( { title: nextTitle } ) }
					/>
					<ToggleControl
						label={ __( 'Expanded', 'bootstrap-theme' ) }
						checked={ expanded }
						onChange={ ( nextExpanded ) => setAttributes( { expanded: nextExpanded } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<h2 className="accordion-header" id={ `heading-${ blockId }` }>
					<button
						className={ buttonClassName }
						type="button"
						aria-expanded={ expanded }
						aria-controls={ `collapse-${ blockId }` }
					>
						{ title || __( 'Accordion Item Title', 'bootstrap-theme' ) }
					</button>
				</h2>
				<div
					id={ `collapse-${ blockId }` }
					className={ collapseClassName }
					aria-labelledby={ `heading-${ blockId }` }
				>
					<div className="accordion-body">
						<InnerBlocks
							template={ [ [ 'core/paragraph', { placeholder: __( 'Accordion item content...', 'bootstrap-theme' ) } ] ] }
						/>
					</div>
				</div>
			</div>
		</>
	);
}
