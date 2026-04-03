import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

const RIDE_OPTIONS = [
	{ label: __( 'None', 'bootstrap-theme' ), value: 'false' },
	{ label: __( 'Auto (on load)', 'bootstrap-theme' ), value: 'carousel' },
	{ label: __( 'Auto (after interaction)', 'bootstrap-theme' ), value: 'true' },
];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { blockId, fade, controls, ride, interval } = attributes;

	useEffect( () => {
		if ( ! blockId ) {
			setAttributes( { blockId: `bs-${ clientId.substring( 0, 8 ) }` } );
		}
	}, [ blockId, clientId, setAttributes ] );

	const carouselClassName = `carousel slide${ fade ? ' carousel-fade' : '' }`;
	const blockProps = useBlockProps( {
		className: carouselClassName,
		id: `carousel-${ blockId }`,
		'data-bs-ride': ride,
		'data-bs-interval': interval,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<ToggleControl
						label={ __( 'Fade transition', 'bootstrap-theme' ) }
						checked={ fade }
						onChange={ ( nextFade ) => setAttributes( { fade: nextFade } ) }
					/>
					<ToggleControl
						label={ __( 'Show Controls', 'bootstrap-theme' ) }
						checked={ controls }
						onChange={ ( nextControls ) => setAttributes( { controls: nextControls } ) }
					/>
					<SelectControl
						label={ __( 'Auto-play', 'bootstrap-theme' ) }
						value={ ride }
						options={ RIDE_OPTIONS }
						onChange={ ( nextRide ) => setAttributes( { ride: nextRide } ) }
					/>
					<RangeControl
						label={ __( 'Interval (ms)', 'bootstrap-theme' ) }
						value={ interval }
						onChange={ ( nextInterval ) => setAttributes( { interval: nextInterval } ) }
						min={ 1000 }
						max={ 30000 }
						step={ 500 }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<div className="carousel-inner">
					<InnerBlocks
						allowedBlocks={ [ 'bootstrap/carousel-item' ] }
						template={ [
							[ 'bootstrap/carousel-item', { active: true } ],
							[ 'bootstrap/carousel-item' ],
						] }
					/>
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
							<span className="visually-hidden">{ __( 'Previous', 'bootstrap-theme' ) }</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target={ `#carousel-${ blockId }` }
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">{ __( 'Next', 'bootstrap-theme' ) }</span>
						</button>
					</>
				) }
			</div>
		</>
	);
}
