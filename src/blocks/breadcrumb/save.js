import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save();

	return (
		<nav { ...blockProps } aria-label="breadcrumb">
			<ol className="breadcrumb">
				<InnerBlocks.Content />
			</ol>
		</nav>
	);
}
