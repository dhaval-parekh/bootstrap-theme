import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { variant } = attributes;

	const blockProps = useBlockProps.save( {
		className: `alert alert-${ variant }`,
		role: 'alert',
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
