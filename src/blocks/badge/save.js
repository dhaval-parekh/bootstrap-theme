import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { text, variant, pill } = attributes;

	const blockProps = useBlockProps.save( {
		className: `badge bg-${ variant }${ pill ? ' rounded-pill' : '' }`,
	} );

	return (
		<RichText.Content
			{ ...blockProps }
			tagName="span"
			value={ text }
		/>
	);
}
