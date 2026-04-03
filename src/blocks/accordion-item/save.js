import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes, context } ) {
	const { title, blockId, expanded } = attributes;
	const accordionId = context?.[ 'bootstrap/accordion/blockId' ];
	const alwaysOpen = context?.[ 'bootstrap/accordion/alwaysOpen' ];

	const blockProps = useBlockProps.save( { className: 'accordion-item' } );
	const buttonClassName = `accordion-button${ expanded ? '' : ' collapsed' }`;
	const collapseClassName = `accordion-collapse collapse${ expanded ? ' show' : '' }`;

	const collapseProps = {
		id: `collapse-${ blockId }`,
		className: collapseClassName,
		'aria-labelledby': `heading-${ blockId }`,
		...( ! alwaysOpen && accordionId ? { 'data-bs-parent': `#accordion-${ accordionId }` } : {} ),
	};

	return (
		<div { ...blockProps }>
			<h2 className="accordion-header" id={ `heading-${ blockId }` }>
				<button
					className={ buttonClassName }
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={ `#collapse-${ blockId }` }
					aria-expanded={ expanded ? 'true' : 'false' }
					aria-controls={ `collapse-${ blockId }` }
				>
					{ title }
				</button>
			</h2>
			<div { ...collapseProps }>
				<div className="accordion-body">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
