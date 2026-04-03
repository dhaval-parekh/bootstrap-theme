import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { active, caption, captionLead } = attributes;

	const itemClassName = `carousel-item${ active ? ' active' : '' }`;
	const blockProps = useBlockProps.save( { className: itemClassName } );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
			{ caption && (
				<div className="carousel-caption d-none d-md-block">
					<h5>{ caption }</h5>
					{ captionLead && <p>{ captionLead }</p> }
				</div>
			) }
		</div>
	);
}
