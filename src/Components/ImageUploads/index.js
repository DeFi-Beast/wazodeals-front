import { useState, useCallback } from "react";
import { DropzoneArea , DropzoneDialog} from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const Index = ({ uploadImage, removeImages}) => {
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles((theme) =>
    createStyles({
      previewChip: {
        minWidth: 80,
        maxWidth: 50,
        maxHeight:100
      },
    })
  );

  const classes = useStyles();

 
  

  const handleClose = () => {

  }

  

 

 

  return (
    <>
      <div >
        <DropzoneArea
        style={{width:"50%"}}
          showPreviews={true}
          showPreviewsInDropzone={false}
          useChipsForPreview
          previewGridProps={{ container: { spacing: 1, direction: "row" } }}
          previewChipProps={{ classes: { root: classes.previewChip } }}
          previewText="Selected file(s)"
          onChange={(files) => uploadImage(files)}
          initialFiles = {[]}
          onComplete={(files) => removeImages(files)}
          

        />
        
      </div>
    </>
  );
};

export default Index;
