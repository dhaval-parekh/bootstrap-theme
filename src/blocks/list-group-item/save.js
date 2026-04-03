import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { active, disabled, variant } = attributes;

	const itemClassName = [
		'list-group-item',
		active ? 'active' : '',
		disabled ? 'disabled' : '',
		variant ? `list-group-item-${ variant }` : '',
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps.save( {
		className: itemClassName,
		...( active ? { 'aria-current': 'true' } : {} ),
		...( disabled ? { 'aria-disabled': 'true' } : {} ),
	} );

	return (
		<li { ...blockProps }>
			<InnerBlocks.Content />
		</li>
	);
}
