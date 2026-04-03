import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl } from '@wordpress/components';

const HORIZONTAL_OPTIONS = [
	{ label: __( 'None', 'bootstrap-theme' ), value: '' },
	{ label: __( 'Always', 'bootstrap-theme' ), value: 'always' },
	{ label: __( 'SM', 'bootstrap-theme' ), value: 'sm' },
	{ label: __( 'MD', 'bootstrap-theme' ), value: 'md' },
	{ label: __( 'LG', 'bootstrap-theme' ), value: 'lg' },
	{ label: __( 'XL', 'bootstrap-theme' ), value: 'xl' },
	{ label: __( 'XXL', 'bootstrap-theme' ), value: 'xxl' },
];

export default function Edit( { attributes, setAttributes } ) {
	const { flush, numbered, horizontal } = attributes;

	const listClassName = [
		'list-group',
		flush ? 'list-group-flush' : '',
		numbered ? 'list-group-numbered' : '',
		horizontal ? `list-group-horizontal${ horizontal !== 'always' ? `-${ horizontal }` : '' }` : '',
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: listClassName } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'bootstrap-theme' ) }>
					<ToggleControl
						label={ __( 'Flush', 'bootstrap-theme' ) }
						help={ __( 'Remove borders and rounded corners.', 'bootstrap-theme' ) }
						checked={ flush }
						onChange={ ( nextFlush ) => setAttributes( { flush: nextFlush } ) }
					/>
					<ToggleControl
						label={ __( 'Numbered', 'bootstrap-theme' ) }
						help={ __( 'Use CSS counters to number items.', 'bootstrap-theme' ) }
						checked={ numbered }
						onChange={ ( nextNumbered ) => setAttributes( { numbered: nextNumbered } ) }
					/>
					<SelectControl
						label={ __( 'Horizontal', 'bootstrap-theme' ) }
						value={ horizontal }
						options={ HORIZONTAL_OPTIONS }
						onChange={ ( nextHorizontal ) => setAttributes( { horizontal: nextHorizontal } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<ul { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ [ 'bootstrap/list-group-item' ] }
					template={ [
						[ 'bootstrap/list-group-item' ],
						[ 'bootstrap/list-group-item' ],
						[ 'bootstrap/list-group-item' ],
					] }
				/>
			</ul>
		</>
	);
}
