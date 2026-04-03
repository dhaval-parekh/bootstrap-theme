import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { blockId, flush, alwaysOpen } = attributes;

	useEffect( () => {
		if ( ! blockId ) {
			setAttributes( { blockId: `bs-${ clientId.substring( 0, 8 ) }` } );
		}
	}, [ blockId, clientId, setAttributes ] );

	const accordionClassName = `accordion${ flush ? ' accordion-flush' : '' }`;
	const blockProps = useBlockProps( {
		className: accordionClassName,
		id: `accordion-${ blockId }`,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<ToggleControl
						label={ __( 'Flush', 'bootstrap-theme' ) }
						help={ __( 'Remove borders and rounded corners to render edge-to-edge.', 'bootstrap-theme' ) }
						checked={ flush }
						onChange={ ( nextFlush ) => setAttributes( { flush: nextFlush } ) }
					/>
					<ToggleControl
						label={ __( 'Always Open', 'bootstrap-theme' ) }
						help={ __( 'Allow multiple items to be open at once.', 'bootstrap-theme' ) }
						checked={ alwaysOpen }
						onChange={ ( nextAlwaysOpen ) => setAttributes( { alwaysOpen: nextAlwaysOpen } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ [ 'bootstrap/accordion-item' ] }
					template={ [
						[ 'bootstrap/accordion-item', { title: __( 'Accordion Item #1', 'bootstrap-theme' ), expanded: true } ],
						[ 'bootstrap/accordion-item', { title: __( 'Accordion Item #2', 'bootstrap-theme' ) } ],
						[ 'bootstrap/accordion-item', { title: __( 'Accordion Item #3', 'bootstrap-theme' ) } ],
					] }
				/>
			</div>
		</>
	);
}
