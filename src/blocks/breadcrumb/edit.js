import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
	const blockProps = useBlockProps();

	return (
		<nav { ...blockProps } aria-label={ __( 'breadcrumb', 'bootstrap-theme' ) }>
			<ol className="breadcrumb">
				<InnerBlocks
					allowedBlocks={ [ 'bootstrap/breadcrumb-item' ] }
					template={ [
						[ 'bootstrap/breadcrumb-item', { label: __( 'Home', 'bootstrap-theme' ), href: '/' } ],
						[ 'bootstrap/breadcrumb-item', { label: __( 'Current Page', 'bootstrap-theme' ), active: true } ],
					] }
				/>
			</ol>
		</nav>
	);
}
