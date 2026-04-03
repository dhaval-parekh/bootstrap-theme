import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { textAlign } = attributes;

	const cardClassName = `card${ textAlign ? ` text-${ textAlign }` : '' }`;
	const blockProps = useBlockProps.save( { className: cardClassName } );

	return (
		<div { ...blockProps }>
			<div className="card-body">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
