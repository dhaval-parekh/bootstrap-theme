import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl, ToggleControl, TextControl } from '@wordpress/components';

const VARIANTS = [
	{ label: __( 'Primary', 'bootstrap-theme' ), value: 'primary' },
	{ label: __( 'Secondary', 'bootstrap-theme' ), value: 'secondary' },
	{ label: __( 'Success', 'bootstrap-theme' ), value: 'success' },
	{ label: __( 'Danger', 'bootstrap-theme' ), value: 'danger' },
	{ label: __( 'Warning', 'bootstrap-theme' ), value: 'warning' },
	{ label: __( 'Info', 'bootstrap-theme' ), value: 'info' },
	{ label: __( 'Light', 'bootstrap-theme' ), value: 'light' },
	{ label: __( 'Dark', 'bootstrap-theme' ), value: 'dark' },
];

export default function Edit( { attributes, setAttributes } ) {
	const { value, max, variant, striped, animated, label, showLabel, height } = attributes;
	const percentage = Math.round( ( value / max ) * 100 );

	const blockProps = useBlockProps( { className: 'progress' } );

	const barClassName = [
		'progress-bar',
		`bg-${ variant }`,
		striped ? 'progress-bar-striped' : '',
		animated ? 'progress-bar-animated' : '',
	].filter( Boolean ).join( ' ' );

	const progressStyle = height > 0 ? { height: `${ height }px` } : undefined;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<RangeControl
						label={ __( 'Value', 'bootstrap-theme' ) }
						value={ value }
						onChange={ ( nextValue ) => setAttributes( { value: nextValue } ) }
						min={ 0 }
						max={ max }
					/>
					<RangeControl
						label={ __( 'Max', 'bootstrap-theme' ) }
						value={ max }
						onChange={ ( nextMax ) => setAttributes( { max: nextMax } ) }
						min={ 1 }
						max={ 1000 }
					/>
					<RangeControl
						label={ __( 'Height (px, 0 = default)', 'bootstrap-theme' ) }
						value={ height }
						onChange={ ( nextHeight ) => setAttributes( { height: nextHeight } ) }
						min={ 0 }
						max={ 50 }
					/>
					<SelectControl
						label={ __( 'Variant', 'bootstrap-theme' ) }
						value={ variant }
						options={ VARIANTS }
						onChange={ ( nextVariant ) => setAttributes( { variant: nextVariant } ) }
					/>
					<ToggleControl
						label={ __( 'Striped', 'bootstrap-theme' ) }
						checked={ striped }
						onChange={ ( nextStriped ) => setAttributes( { striped: nextStriped } ) }
					/>
					<ToggleControl
						label={ __( 'Animated', 'bootstrap-theme' ) }
						checked={ animated }
						onChange={ ( nextAnimated ) => setAttributes( { animated: nextAnimated } ) }
					/>
					<ToggleControl
						label={ __( 'Show Label', 'bootstrap-theme' ) }
						checked={ showLabel }
						onChange={ ( nextShowLabel ) => setAttributes( { showLabel: nextShowLabel } ) }
					/>
					{ showLabel && (
						<TextControl
							label={ __( 'Label', 'bootstrap-theme' ) }
							help={ __( 'Leave empty to show percentage.', 'bootstrap-theme' ) }
							value={ label }
							onChange={ ( nextLabel ) => setAttributes( { label: nextLabel } ) }
						/>
					) }
				</PanelBody>
			</InspectorControls>
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
		</>
	);
}
