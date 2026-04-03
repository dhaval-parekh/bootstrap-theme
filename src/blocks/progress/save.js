import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { value, max, variant, striped, animated, label, showLabel, height } = attributes;
	const percentage = Math.round( ( value / max ) * 100 );

	const blockProps = useBlockProps.save( { className: 'progress' } );

	const barClassName = [
		'progress-bar',
		`bg-${ variant }`,
		striped ? 'progress-bar-striped' : '',
		animated ? 'progress-bar-animated' : '',
	].filter( Boolean ).join( ' ' );

	const progressStyle = height > 0 ? { height: `${ height }px` } : undefined;

	return (
		<div { ...blockProps } style={ progressStyle }>
			<div
				className={ barClassName }
				role="progressbar"
				style={ { width: `${ percentage }%` } }
				aria-valuenow={ value }
				aria-valuemin={ 0 }
				aria-valuemax={ max }
			>
				{ showLabel ? ( label || `${ percentage }%` ) : null }
			</div>
		</div>
	);
}
