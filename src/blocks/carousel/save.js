import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { blockId, fade, controls, ride, interval } = attributes;

	const carouselClassName = `carousel slide${ fade ? ' carousel-fade' : '' }`;
	const blockProps = useBlockProps.save( {
		className: carouselClassName,
		id: `carousel-${ blockId }`,
		'data-bs-ride': ride,
		'data-bs-interval': interval,
	} );

	return (
		<div { ...blockProps }>
			<div className="carousel-inner">
				<InnerBlocks.Content />
			</div>
			{ controls && (
				<>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target={ `#carousel-${ blockId }` }
						data-bs-slide="prev"
					>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target={ `#carousel-${ blockId }` }
						data-bs-slide="next"
					>
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</>
			) }
		</div>
	);
}
