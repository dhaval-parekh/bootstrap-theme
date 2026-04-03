import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { type, variant, small } = attributes;

	const spinnerClassName = `spinner-${ type } text-${ variant }${ small ? ` spinner-${ type }-sm` : '' }`;
	const blockProps = useBlockProps.save( { className: spinnerClassName, role: 'status' } );

	return (
		<div { ...blockProps }>
			<span className="visually-hidden">Loading...</span>
		</div>
	);
}
