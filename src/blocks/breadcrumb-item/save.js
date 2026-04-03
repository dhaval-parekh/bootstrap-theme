import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { label, href, active } = attributes;

	const itemClassName = `breadcrumb-item${ active ? ' active' : '' }`;
	const blockProps = useBlockProps.save( {
		className: itemClassName,
		...( active ? { 'aria-current': 'page' } : {} ),
	} );

	return (
		<li { ...blockProps }>
			{ active ? label : <a href={ href }>{ label }</a> }
		</li>
	);
}
