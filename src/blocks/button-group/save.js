import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { size, vertical, ariaLabel } = attributes;

	const groupClassName = [
		vertical ? 'btn-group-vertical' : 'btn-group',
		size ? `btn-group-${ size }` : '',
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps.save( {
		className: groupClassName,
		role: 'group',
		'aria-label': ariaLabel,
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
