import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { blockId, flush } = attributes;

	const accordionClassName = `accordion${ flush ? ' accordion-flush' : '' }`;
	const blockProps = useBlockProps.save( {
		className: accordionClassName,
		id: `accordion-${ blockId }`,
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
