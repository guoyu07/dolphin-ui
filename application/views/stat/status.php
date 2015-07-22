<!-- Content Header (Page header) -->
			<div class="modal fade" id="delModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
				  <div class="modal-content">
					<div class="modal-header">
					  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					  <h4 class="modal-title" id="myModalLabel">Delete Run</h4>
					</div>
					<form name="editForm" role="form" method="post">
						<div class="modal-body">
							<fieldset>
								<div class="form-group">
									<label>Run ID:</label>
									<label id="delRunId"></label>
									<br>
									<label>Are you sure you want to delete this run?</label>
								</div>
							</fieldset>   
						</div>
						<div class="modal-footer">
						  <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
						  <button type="button" id="confirm_del_btn" class="btn btn-danger" data-dismiss="modal" onclick="confirmDeleteRunparams(this.value)">Delete</button>
						</div>
					</form>
				  </div>
				</div>
			</div><!-- End Delete modal -->	
			
				<section class="content-header">
					<h1>
						NGS Run Status
						<small>Status details</small>
					</h1>
					<ol class="breadcrumb">
						<li><a href="<?php echo BASE_PATH?>"><i class="fa fa-dashboard"></i> Home</a></li>
						<li><a href="<?php echo BASE_PATH."/search"?>">NGS Pipeline</a></li>
						<li class="active"><?php echo $field?></li
					</ol>
				</section>
				<!-- Main content -->
				<section class="content">
					<div class="row">
						<div class="col-md-12">
						<?php echo $html->sendJScript('status', "", "", "", $uid, $gids); ?>
						<?php echo $html->getRespBoxTable_ng("Current Run Status", "runparams", "<th>ID</th><th>Name</th><th>Output Directory</th><th>Description</th><th>Status</th><th>Options</th>"); ?>
						</div>
					</div><!-- /.row -->
				</section><!-- /.content -->
