import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { flush, numbered, horizontal } = attributes;

	const listClassName = [
		'list-group',
		flush ? 'list-group-flush' : '',
		numbered ? 'list-group-numbered' : '',
		horizontal ? `list-group-horizontal${ horizontal !== 'always' ? `-${ horizontal }` : '' }` : '',
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps.save( { className: listClassName } );

	return (
		<ul { ...blockProps }>
			<InnerBlocks.Content />
		</ul>
	);
}
